const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center px-0 py-[27px]">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <div className="w-full rounded-2xl border border-border bg-card overflow-hidden">
          <div className="py-10 px-8 md:px-16 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--muted))_0%,transparent_70%)]">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Want to collaborate or just say hi? Reach out to me via{" "}
              <a
                href="mailto:agustiaeriani@gmail.com"
                className="text-[hsl(var(--link))] hover:underline"
              >
                email
              </a>{" "}
              or connect with me on{" "}
              <a
                href="https://linkedin.com/in/agustiaeriani"
                className="text-[hsl(var(--link))] hover:underline"
              >
                LinkedIn
              </a>
              . I'm always open to interesting conversations and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
