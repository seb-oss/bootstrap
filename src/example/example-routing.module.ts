import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  { path: 'button-group', loadChildren: () => import('./button-group/button-group.module').then(m => m.ButtonGroupModule) },
  { path: 'alerts', loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'animations', loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule) },
  { path: 'breadcrumbs', loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule) },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  { path: 'check-boxes-and-slide-toggles', loadChildren: () => import('./checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.module').then(m => m.CheckboxesAndSlideTogglesModule) },
  { path: 'datepicker', loadChildren: () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule) },
  { path: 'dropdown', loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule) },
  { path: 'nabvar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'pagination', loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule) },
  { path: 'input-group', loadChildren: () => import('./input-group/input-group.module').then(m => m.InputGroupModule) },
  { path: 'list-group', loadChildren: () => import('./list-group/list-group.module').then(m => m.ListGroupModule) },
  { path: 'radio-buttons', loadChildren: () => import('./radio-buttons/radio-buttons.module').then(m => m.RadioButtonsModule) },
  { path: 'skeleton-loader', loadChildren: () => import('./skeleton-loader/skeleton-loader.module').then(m => m.SkeletonLoaderModule) },
  { path: 'spinner', loadChildren: () => import('./spinner/spinner.module').then(m => m.SpinnerModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
  { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) },
  { path: 'toast', loadChildren: () => import('./toast/toast.module').then(m => m.ToastModule) },
  { path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule) },
  { path: '**', redirectTo: 'buttons', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule {
}
