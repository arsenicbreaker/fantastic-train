import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gcloudLogo from "@/assets/gcloud.png";
import hacktivLogo from "@/assets/hacktiv.png";
import courseraLogo from "@/assets/coursera.png";

const credentials = [
{ name: "Google Cloud", logo: gcloudLogo },
{ name: "Hacktiv8", logo: hacktivLogo },
{ name: "Coursera", logo: courseraLogo }];


const CredentialsSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} id="credentials" className="reveal px-8 flex flex-col items-center py-[40px]">
      <span className="inline-block bg-foreground text-background text-sm font-medium px-5 py-1.5 rounded-full mb-5">Credentials</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">Browse my recent credentials</h2>
      <p className="text-sm text-muted-foreground mb-10 text-center max-w-lg">Certifications and courses that have shaped my skills and knowledge in technology.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        {credentials.map((cred) =>
        <div key={cred.name} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
            <img src={cred.logo} alt={cred.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{cred.name}</h3>
              <Button variant="outline" size="sm" className="rounded-full">View</Button>
            </div>
          </div>
        )}
      </div>
    </section>);

};

export default CredentialsSection;