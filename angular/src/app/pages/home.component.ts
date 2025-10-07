import { Component, signal, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import type { IvtSchema } from '@ivandt/importer';
import { IvtImporterComponent } from '@ivandt/importer-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IvtImporterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="page">
      @if (isLoading() || !schema().sessionToken) {
        <div class="loading">Creating session...</div>
      } @else {
        <ivandt-importer [schema]="schema()"></ivandt-importer>
      }
    </div>
  `,
  styles: [`
    .page {
      height: 100svh;
      width: 100vw;
    }

    .loading {
      height: 100svh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  
  isLoading = signal(true);
  sessionToken = signal('');
  
  schema = signal<IvtSchema>({
    id: '',
    key: 'Ivandt-in-Angular',
    publicKey: 'pk_live_967ca4d1393059e5333a8a5a653b5f34bc0baec4b9e35c839c272d4e1d315747',
    sessionToken: this.sessionToken(),
    title: 'Transformers test',
    stepsConfig: {
      uploadFileStep: {
        maxFileSize: 300 * 1024 * 1024
      },
      mapHeadersStep: {
        intelligentImport: true
      },
      reviewStep: {
        invalidDataBehaviour: 'remove_invalid_rows'
      }
    },
    fields: [
      {
        type: 'text',
        label: 'Business name',
        key: 'businessName',
        validators: [
          {
            type: 'required',
            message:
              'This field is required, but I want the message to be long so I can test the smart fix button inside the cell tooltip, so there you go!'
          }
        ],
        order: 1
      },
      {
        type: 'numeric',
        label: 'Employee count',
        key: 'employeeCount',
        description: 'How many employees does this company have?',
        validators: [
          {
            type: 'numeric',
            allowDecimals: false
          },
          {
            type: 'range',
            min: 10,
            max: 2000
          }
        ],
        order: 2
      },
      {
        type: 'monetary',
        label: 'Cost',
        key: 'cost',
        locale: 'English (United Kingdom)',
        average: true,
        description:
          'How much did they pay for the API and did they take a long time and have to write a long email?',
        order: 3
      },
      {
        type: 'text',
        label: 'Phone number',
        key: 'phoneNumber',
        validators: [{ type: 'phone', countries: ['AU', 'US', 'DE'], severity: 'w' }],
        order: 4
      },
      {
        type: 'text',
        label: 'Website',
        key: 'website',
        validators: [{ type: 'url' }],
        order: 5
      },
      {
        type: 'text',
        label: 'Access token',
        key: 'accessToken',
        validators: [{ type: 'required' }, { type: 'uuid', version: '4' }],
        order: 6
      },
      {
        type: 'checkbox',
        label: 'Active',
        key: 'isActive',
        validators: [],
        order: 7
      },
      {
        type: 'text',
        label: 'Company email',
        key: 'companyEmail',
        validators: [{ type: 'email' }],
        order: 8
      }
    ],
    eventHandlers: {
      onSubmit: async (tableRows, meta, cellErrors, submitMeta) => {
        this.router.navigate(['/success']);
      }
    }
  });

  async ngOnInit() {
    try {
      const response = await fetch('http://localhost:3001/api/sessions');
      const data = await response.json();
      this.sessionToken.set(data.sessionToken);
      this.schema.update(s => ({ ...s, sessionToken: data.sessionToken }));
      this.isLoading.set(false);
    } catch (err) {
      console.error('Failed to create session:', err);
      this.isLoading.set(false);
    }
  }
}
