/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage?: string;
  description: string;
  year: string;
  location: string;
}

export interface ContactForm {
  nombre: string;
  telefono: string;
  correo: string;
  servicio: string;
  mensaje: string;
}

export interface FormErrors {
  nombre?: string;
  telefono?: string;
  correo?: string;
  servicio?: string;
  mensaje?: string;
}
