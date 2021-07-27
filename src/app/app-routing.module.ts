import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {IconsComponent} from "../example/components/icons/icons.component";
import {TypographyComponent} from "../example/components/typography/typography.component";
import {ColorsComponent} from "../example/components/colors/colors.component";

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'examples', loadChildren: () => import('../example/example.module').then((m) => m.ExampleModule) },
  { path: '**', redirectTo: 'about' },
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
