import type { Schema, Struct } from '@strapi/strapi';

export interface OrdersProduktZakaza extends Struct.ComponentSchema {
  collectionName: 'components_orders_produkt_zakaza';
  info: {
    displayName: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u0430\u043A\u0430\u0437\u0430';
    icon: 'shoppingCart';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
  };
}

export interface PagesPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_pages_page_metas';
  info: {
    description: '';
    displayName: 'meta';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    key_words: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShareGorod extends Struct.ComponentSchema {
  collectionName: 'components_share_gorod';
  info: {
    description: '';
    displayName: '\u0413\u043E\u0440\u043E\u0434';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharePochta extends Struct.ComponentSchema {
  collectionName: 'components_share_pochta';
  info: {
    displayName: '\u041F\u043E\u0447\u0442\u0430';
    icon: 'envelop';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Unique;
  };
}

export interface ShareTelefon extends Struct.ComponentSchema {
  collectionName: 'components_share_telefon';
  info: {
    displayName: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
    icon: 'phone';
  };
  attributes: {
    phone: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'orders.produkt-zakaza': OrdersProduktZakaza;
      'pages.page-meta': PagesPageMeta;
      'share.gorod': ShareGorod;
      'share.pochta': SharePochta;
      'share.telefon': ShareTelefon;
    }
  }
}
