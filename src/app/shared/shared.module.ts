import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons/faArrowRight';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons/faCalendarAlt';
import { faCheckCircle } from '@fortawesome/pro-regular-svg-icons/faCheckCircle';
import { faExclamationTriangle } from '@fortawesome/pro-regular-svg-icons/faExclamationTriangle';
import { faQuestionSquare } from '@fortawesome/pro-regular-svg-icons/faQuestionSquare';
import { faSave } from '@fortawesome/pro-regular-svg-icons/faSave';
import { faCopy } from '@fortawesome/pro-regular-svg-icons/faCopy';
import { faEye } from '@fortawesome/pro-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-regular-svg-icons/faEyeSlash';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { ExampleComponent } from './example/example.component';
import { IncludeComponent } from './include/include.component';
import { AnchorHeadingComponent } from './anchor-heading/anchor-heading.component';
import { faLink } from '@fortawesome/pro-regular-svg-icons/faLink';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CodeSnippetComponent, ExampleComponent, IncludeComponent, AnchorHeadingComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    CommonModule,
    FontAwesomeModule,
    CodeSnippetComponent,
    ExampleComponent,
    IncludeComponent,
    AnchorHeadingComponent,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // add icons that should be available in the app/module
    library.addIcons(
      faCopy,
      faEye,
      faEyeSlash,
      faCalendarAlt,
      faArrowRight,
      faArrowLeft,
      faSave,
      faCheckCircle,
      faExclamationTriangle,
      faQuestionSquare,
      faLink,
      <any>faGithub
    );
  }
}
