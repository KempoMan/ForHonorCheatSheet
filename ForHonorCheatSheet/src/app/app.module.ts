import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SamuraiKenseiComponent } from './samurai-kensei/samurai-kensei.component';
import { SamuraiOrochiComponent } from './samurai-orochi/samurai-orochi.component';
import { HomeComponent } from './home/home.component';
import { SamuraiShugokiComponent } from './samurai-shugoki/samurai-shugoki.component';
import { SamuraiNobushiComponent } from './samurai-nobushi/samurai-nobushi.component';
import { VikingRaiderComponent } from './viking-raider/viking-raider.component';
import { VikingWarlordComponent } from './viking-warlord/viking-warlord.component';
import { VikingBerserkerComponent } from './viking-berserker/viking-berserker.component';
import { VikingValkyrieComponent } from './viking-valkyrie/viking-valkyrie.component';
import { KnightConquerorComponent } from './knight-conqueror/knight-conqueror.component';
import { KnightLawbringerComponent } from './knight-lawbringer/knight-lawbringer.component';
import { KnightPeacekeeperComponent } from './knight-peacekeeper/knight-peacekeeper.component';
import { KnightWardenComponent } from './knight-warden/knight-warden.component';

@NgModule({
	declarations: [
		AppComponent,
		SamuraiKenseiComponent,
		SamuraiOrochiComponent,
		HomeComponent,
		SamuraiShugokiComponent,
		SamuraiNobushiComponent,
		VikingRaiderComponent,
		VikingWarlordComponent,
		VikingBerserkerComponent,
		VikingValkyrieComponent,
		KnightConquerorComponent,
		KnightLawbringerComponent,
		KnightPeacekeeperComponent,
		KnightWardenComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },			
			{ path: 'home', component: HomeComponent },
			{ path: 'samurai-kensei', component: SamuraiKenseiComponent },
			{ path: 'samurai-orochi', component: SamuraiOrochiComponent },
			{ path: 'samurai-shugoki', component: SamuraiShugokiComponent },
			{ path: 'samurai-nobushi', component: SamuraiNobushiComponent },
			{ path: 'viking-raider', component: VikingRaiderComponent },
			{ path: 'viking-warlord', component: VikingWarlordComponent },
			{ path: 'viking-berserker', component: VikingBerserkerComponent },
			{ path: 'viking-valkyrie', component: VikingValkyrieComponent },
			{ path: 'knight-conqueror', component: KnightConquerorComponent },
			{ path: 'knight-lawbringer', component: KnightLawbringerComponent },
			{ path: 'knight-peacekeeper', component: KnightPeacekeeperComponent },
			{ path: 'knight-warden', component: KnightWardenComponent }
			
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
