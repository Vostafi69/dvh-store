import type { Schema, Struct } from '@strapi/strapi';

export interface PagesPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_pages_page_metas';
  info: {
    description: '';
    displayName: 'meta';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pages.page-meta': PagesPageMeta;
    }
  }
}
