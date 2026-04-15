import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | QuoteScape",
  description: "QuoteScape Privacy Policy – how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #FAFAF9 0%, #F0F4FA 50%, #FAFAF9 100%)",
      }}
    >
      {/* Top nav bar */}
      <div className="border-b border-zinc-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to QuoteScape
          </Link>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500">
            Effective Date: <span className="text-zinc-700 font-medium">April 2, 2026</span>
          </p>
        </div>

        {/* Intro */}
        <div className="prose-section mb-10">
          <p className="text-base text-zinc-600 leading-relaxed">
            At QuoteScape, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our application, website, or services. Please take the time to read this policy carefully.
          </p>
        </div>

        <div className="space-y-10 divide-y divide-zinc-200/70">
          {/* Section 1 */}
          <Section title="Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes data that can identify you, such as your name, email address, phone number, company name, and any other information you voluntarily provide when signing up, contacting us, or using our services.
              </li>
              <li>
                <strong>Project &amp; Usage Data:</strong> We may collect data related to your use of the platform, including uploaded property images, project designs, proposals, and interactions within the app to deliver and improve our services.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> We collect technical data, including your IP address, browser type, device information, and usage behavior to enhance your experience and improve our platform performance.
              </li>
            </ul>
          </Section>

          {/* Section 2 */}
          <Section title="How We Use Your Information">
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>
                <strong>Service Delivery:</strong> To provide you with our visualization, design, and proposal tools, and to fulfill your requests within the platform.
              </li>
              <li>
                <strong>Communication:</strong> To respond to your inquiries, provide support, and send important updates related to your account or service usage.
              </li>
              <li>
                <strong>Product Improvement:</strong> To analyze how users interact with our tool and improve features, performance, and user experience.
              </li>
              <li>
                <strong>Marketing:</strong> With your consent, we may send you product updates, tips, and promotional content related to improving your sales and business performance.
              </li>
              <li>
                <strong>Analytics:</strong> To monitor usage trends and optimize the effectiveness of our platform and services.
              </li>
            </ul>
          </Section>

          {/* Section 3 */}
          <Section title="Data Sharing">
            <p>We may share your information with:</p>
            <ul>
              <li>Our internal team members to operate, maintain, and improve the service.</li>
              <li>Third-party service providers (such as hosting, analytics, or communication tools) that help us deliver our services.</li>
              <li>Legal or government authorities when required by law or to protect our rights and users.</li>
            </ul>
            <p className="font-semibold text-zinc-800 mt-4">We do not sell your personal data.</p>
          </Section>

          {/* Section 4 */}
          <Section title="Data Security">
            <p>
              We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          {/* Section 5 */}
          <Section title="Cookies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage, and improve our services. You can manage or disable cookies through your browser settings.
            </p>
          </Section>

          {/* Section 6 */}
          <Section title="Third-Party Links">
            <p>
              Our platform or website may contain links to third-party websites or integrations. We are not responsible for the privacy practices or content of those third parties. Please review their privacy policies separately.
            </p>
          </Section>

          {/* Section 7 */}
          <Section title="Your Choices">
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request information about how your data is used</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, you can contact us at{" "}
              <a
                href="tel:+18322815930"
                className="text-blue-600 hover:underline font-medium"
              >
                +1 832-281-5930
              </a>
              .
            </p>
          </Section>

          {/* Section 8 */}
          <Section title="Updates to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our website or within the app, along with the updated effective date.
            </p>
          </Section>
        </div>

        {/* Footer note */}
        <div className="mt-14 pt-8 border-t border-zinc-200/60">
          <p className="text-sm text-zinc-400 text-center">
            &copy; 2026 QuoteScape. All Rights Reserved.
          </p>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-10 first:pt-0">
      <h2 className="text-xl font-bold text-zinc-900 mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-base text-zinc-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-zinc-800 [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}
