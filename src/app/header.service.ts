import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private doctolibButton: any = {
    title: 'Cliquer ici pour prendre RDV en ligne',
    link: 'https://www.doctolib.fr/osteopathe/grasse/florine-benard',
    iconClass: 'logo_doctolib',
    iconLink: './assets/images/logo_doctolib.svg',
    color: 'blue',
};
private homeButton: any = {
  title: 'RDV par téléphone au 06 51 17 12 66',
  link: 'tel:+33651171266',
  iconClass: 'phone',
  color: 'green',
};
private phoneButton: any = {
  title: 'RDV par téléphone au 06 51 17 12 66',
  link: 'tel:+33651171266',
  iconClass: 'phone',
  color: 'yellow',
};

  constructor() {}

  getDoctolibButton() {
    return this.doctolibButton;
  }
  getHomeButton() {
    return this.homeButton;
  }
  getPhoneButton() {
    return this.phoneButton;
  }
}
