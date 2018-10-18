 export default {

     data() {
         return {
             form_active: null,
             form_signin: {
                 email: '',
                 password: '',
                 remember: '',
             }
         }
     },
     methods: {
         flip: function (which, e) {
             e.preventDefault();
             this.$root.$emit('bv::show::modal', 'auth_modal');
             if (which !== this.form_active) {
                 this.form_active = which;
             };
         },

         onSubmit: function (e) {
             e.preventDefault();
             axios.post('/user/login', {
                     email: this.form_signin.email,
                     password: this.form_signin.password,
                     remember: this.form_signin.remember,
                 })
                 .then(function (response) {
                     var resp = JSON.stringify(response.data);
                     if (resp === 'success') {
                         alert('fatto')
                     };

                 })
                 .catch(function (error) {
                     // Wu oh! Something went wrong
                     alert(error.resp);
                     if (resp === 'error') {
                         alert('opsss')
                     };
                 });
         },
     }
 };
