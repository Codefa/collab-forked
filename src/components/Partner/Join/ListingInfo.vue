<section id="join-sauspa">
<b-container>
<b-row>
<b-col cols="6">
<template>
  <div>
    <b-form class="add_listing">
       <b-form-group label="<?php echo $this->lang->line('center_name');?>"
                label-for="center_name">
		<b-form-input id="center_name"></b-form-input>
	</b-form-group> 
	<b-form-group label="<?php echo $this->lang->line('center_type');?>"
                label-for="center_name">
		<b-form-input id="center_name"></b-form-input>
	</b-form-group>
	<b-form-group label="<?php echo $this->lang->line('center_speciality');?>"
                label-for="center_name">
		<b-form-input id="center_name"></b-form-input>
	</b-form-group>
	<div id="form_step_cta">
	 <b-button href="<?php echo base_url('partner/listing_location');?>" variant="primary">Next step</b-button>
	 </div>
    </b-form>
  </div>
</template>
</b-col>
<b-col cols="6" class="px-5">
<b-card>
 <div>
 <div style="margin-bottom: 24px;"><div style="margin-bottom: 8px;">
 <div class="_1mhhlpmr"><span>Tutta la casa</span></div></div>
 <div class="_1n0q8zmp"><span>Gli ospiti avranno l'intero alloggio solo per loro. Di solito la sistemazione include una stanza da letto, un bagno e una cucina.</span></div></div><div style="margin-bottom: 24px;"><div style="margin-bottom: 8px;"><div class="_1mhhlpmr"><span>Stanza privata</span></div></div><div class="_1n0q8zmp"><span>Gli ospiti hanno una stanza privata per dormire. La altre aree potrebbero essere condivise.</span></div></div><div style="margin-bottom: 24px;"><div style="margin-bottom: 8px;"><div class="_1mhhlpmr"><span>Stanza condivisa</span></div></div><div class="_1n0q8zmp"><span>Gli ospiti dormono in una camera da letto o in un'area che potrebbe essere condivisa con altre persone.</span></div></div></div>
</b-card>
</b-col>
</b-row>
</b-container>
</section>
