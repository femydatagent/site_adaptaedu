import SchoolsHeader from './schools/schools-header';
import SchoolsHero from './schools/schools-hero';
import EscolasSobrecarga from './escolas-sobrecarga';
import { ControlFeatures, HowItWorks, PackagesManagement, SubjectsManagement } from './schools/schools-features';
import SchoolsPanel from './schools/schools-panel';
import { Benefits, SchoolsCta, SchoolsFooter } from './schools/schools-closing';

/** Página "Para Escolas" (/escolas, /en/schools, /es/escuelas), renderizada no servidor. */
export default function Escolas() {
  return (
    <div className="min-h-screen">
      <SchoolsHeader />
      <main>
        <SchoolsHero />
        <EscolasSobrecarga />
        <ControlFeatures />
        <SubjectsManagement />
        <PackagesManagement />
        <HowItWorks />
        <SchoolsPanel />
        <Benefits />
        <SchoolsCta />
      </main>
      <SchoolsFooter />
    </div>
  );
}
