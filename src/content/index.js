// Alle bewerkbare inhoud staat in site.json en wordt beheerd via het Elektromax-paneel (aparte repo).
// Telefoon, e-mail en sociale media zijn gedeeld; de rest is per taal.
import data from "./site.json";

export function getContent(locale) {
  const c = data.content[locale];
  return {
    ...c,
    contact: { ...c.contact, phone: data.company.phone, email: data.company.email },
    socials: data.company.socials,
  };
}

export const ui = data.ui;
export const extras = data.extras;
