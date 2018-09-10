import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {ButtonsComponent} from '../example/components/buttons/buttons.component';
import {AlertsComponent} from '../example/components/alerts/alerts.component';
import {TabsComponent} from '../example/components/tabs/tabs.component';
import {TablesComponent} from '../example/components/tables/tables.component';
import {BreadcrumbsComponent} from '../example/components/breadcrumbs/breadcrumbs.component';
import {FormsComponent} from '../example/components/forms/forms.component';
import {CheckboxesAndSlideTogglesComponent} from '../example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component';
import {IconsComponent} from '../example/components/icons/icons.component';
import {InputGroupComponent} from '../example/components/input-group/input-group.component';
import {ListGroupComponent} from '../example/components/list-group/list-group.component';
import {LoadersComponent} from '../example/components/loaders/loaders.component';
import {DropdownsComponent} from '../example/components/dropdowns/dropdowns.component';
import {CardsComponent} from '../example/components/cards/cards.component';
import {ModalsComponent} from '../example/components/modals/modals.component';
import {PaginationComponent} from '../example/components/pagination/pagination.component';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    //{ path: 'typography', component: TypographyComponent },
    { path: 'tables', component: TablesComponent },
    //{ path: 'colors', component: ColorsComponent },
    { path: 'modals', component: ModalsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'input-group', component: InputGroupComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'checkboxes-and-slide-toggles', component: CheckboxesAndSlideTogglesComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'breadcrumbs', component: BreadcrumbsComponent },
    //{ path: 'tooltips', component: TooltipsComponent },
    //{ path: 'example-page', component: ExamplePageComponent },
    //{ path: 'about', component: AboutComponent },
    { path: 'dropdowns', component: DropdownsComponent },
    //{ path: 'accordion', component: AccordionComponent },
    //{ path: 'grid', component: GridComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'list-group', component: ListGroupComponent },
    { path: 'loaders', component: LoadersComponent },
    //{ path: 'wizard', component: WizardExampleComponent },
    { path: '**', redirectTo: 'about' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
