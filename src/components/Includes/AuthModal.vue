<template>
  <div>
    <span @click="flip('signin', $event)">Login</span>
    <span class="ml-4" @click="flip('signup', $event)">Signup</span>
    <b-modal id="auth_modal" hide-footer centered no-fade lazy>
      <div id="signin_block" :class="{ 'active': form_active == 'signin' }">
        <b-button type="submit" block variant="blue">Facebook</b-button>
        <b-button type="submit" block variant="secondary">Google+</b-button>
        <b-form @submit="onSubmit">
          <b-form-group id="signin_email">
            <b-form-input v-model="form_signin.email" type="text" placeholder="Email"></b-form-input>
          </b-form-group>
          <b-form-group id="signin_password">
            <b-form-input v-model="form_signin.password" type="password" placeholder="Password"></b-form-input>
          </b-form-group>
          <b-form-group id="signin_remember">
            <b-form-checkbox v-model="form_signin.remember" value="1" unchecked-value="0">
              Remember
            </b-form-checkbox>
          </b-form-group>
          <b-button type="submit" block variant="primary">
            Login
          </b-button>

        </b-form>
        <div class="sub_form_link text-center">
          <a href="#signin" @click="flip('forgot', $event)">
            forgot pass?</a>
        </div>
        <div class="auth_links">
          <span>
            not_registered ? <a href="#signup" @click="flip('signup', $event)">
              Signup</a></span>
        </div>
      </div>
      <div id="signup_block" :class="{ 'active': form_active == 'signup' }">
        <b-form inline>
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" />
          <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
          <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
          </b-input-group>

        </b-form>
        <div class="auth_links">
          <span>
            already registered <a href="#signin" @click="flip('signin', $event)">
              Signin</a></span>
        </div>
      </div>
      <div id="reset_password_block" :class="{ 'active': form_active == 'forgot' }">
        <div class="text_head">
          <h3>
            reset_pass
          </h3>
          <p>
            resort_pass_text
          </p>
        </div>
        <b-form @submit="onSubmit">
          <b-form-group id="signin_email">
            <b-form-input v-model="form_signin.email" type="text" placeholder="email"></b-form-input>
          </b-form-group>
          <b-form-group id="form_cta">
            <a href="#signin" @click="flip('signin', $event)">
              back_login</a>
            <b-button type="submit" class="float-right" variant="primary">
              reset_link
            </b-button>
          </b-form-group>
        </b-form>
      </div>

    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AuthModal',
  data () {
    return {
      form_active: null,
      form_signin: {
        email: '',
        password: '',
        remember: ''
      }
    }
  },
  methods: {
    flip (which, e) {
      e.preventDefault()
      this.$root.$emit('bv::show::modal', 'auth_modal')
      if (which !== this.form_active) {
        this.form_active = which
      }
    },
    onSubmit (e) {
      e.preventDefault()
      axios.post('/user/login', {
        email: this.form_signin.email,
        password: this.form_signin.password,
        remember: this.form_signin.remember
      })
      .then(response => {
        const resp = JSON.stringify(response.data)
        console.log(resp)
      })
      .catch(err => {
        alert(err)
      })
    }
  }
}
</script>
