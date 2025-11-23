
export type Language = 'en' | 'ru' | 'uz';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    gallery: string;
    contact: string;
    quote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
  about: {
    title: string;
    description: string;
    stat1: string;
    stat1_label: string;
    stat2: string;
    stat2_label: string;
    stat3: string;
    stat3_label: string;
    stat4: string;
    stat4_label: string;
  };
  products: {
    title: string;
    pvc_title: string;
    pvc_desc: string;
    alum_title: string;
    alum_desc: string;
    doors_title: string;
    doors_desc: string;
    imported_title: string;
    imported_desc: string;
  };
  services: {
    title: string;
    measure_title: string;
    measure_desc: string;
    delivery_title: string;
    delivery_desc: string;
    install_title: string;
    install_desc: string;
    consult_title: string;
    consult_desc: string;
    info_title: string;
    info_desc: string;
    cta_title: string;
    cta_desc: string;
    cta_button: string;
  };
  gallery: {
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    office_label: string;
    name_label: string;
    phone_label: string;
    message_label: string;
    submit: string;
    submitting: string;
    success: string;
    success_title: string;
  };
  footer: {
    rights: string;
    contact_title: string;
    links_title: string;
    location_title: string;
    address_label: string;
  }
}

export const BRAND_COLORS = {
  red: '#D80000',
  black: '#000000',
  white: '#FFFFFF',
};