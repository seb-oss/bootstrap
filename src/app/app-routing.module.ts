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
import {DropdownsComponent} from '../example/components/dropdowns/dropdowns.component';
import {CardsComponent} from '../example/components/cards/cards.component';
import {ModalsComponent} from '../example/components/modals/modals.component';
import {PaginationComponent} from '../example/components/pagination/pagination.component';
import {TooltipsComponent} from '../example/components/tooltips/tooltips.component';
import {AccordionComponent} from '../example/components/accordion/accordion.component';
import {TypographyComponent} from '../example/components/typography/typography.component';
import {AboutComponent} from './components/about/about.component';
import {SkeletonLoaderComponent} from '../example/components/skeleton-loader/skeleton-loader.component';
import {DatepickerComponent} from '../example/components/datepicker/datepicker.component';
import {NavbarComponent} from '../example/components/navbar/navbar.component';
import {RadioButtonsComponent} from '../example/components/radio-buttons/radio-buttons.component';
import {ColorsComponent} from '../example/components/colors/colors.component';
import {ToastNotificationsComponent} from '../example/components/toast-notifications/toast-notifications.component';
import {SpinnersComponent} from '../example/components/spinners/spinners.component';
import {ButtonGroupComponent} from '../example/components/button-group/button-group.component';
import {AnimationsComponent} from '../example/components/animations/animations.component';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'typography', component: TypographyComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'modals', component: ModalsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'button-group', component: ButtonGroupComponent },
    { path: 'input-group', component: InputGroupComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'checkboxes-and-slide-toggles', component: CheckboxesAndSlideTogglesComponent },
    { path: 'radio-buttons', component: RadioButtonsComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'breadcrumbs', component: BreadcrumbsComponent },
    { path: 'tooltips', component: TooltipsComponent },
    { path: 'toast-notifications', component: ToastNotificationsComponent },
    //{ path: 'example-page', component: ExamplePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dropdowns', component: DropdownsComponent },
    { path: 'accordion', component: AccordionComponent },
    //{ path: 'grid', component: GridComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'list-group', component: ListGroupComponent },
    { path: 'spinners', component: SpinnersComponent },
    //{ path: 'wizard', component: WizardExampleComponent },
    { path: 'skeleton-loader', component: SkeletonLoaderComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '**', redirectTo: 'about' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
