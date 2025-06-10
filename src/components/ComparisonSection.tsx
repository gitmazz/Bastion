import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  AlertTriangle,
  Search,
  FileText,
  Settings,
  RotateCcw,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const comparisonData = [
  { feature: "Provides policy templates", typical: "check", ours: "check" },
  { feature: "Performs gap assessment", typical: "check", ours: "check" },
  {
    feature: "Helps collect audit evidence",
    typical: "limited",
    ours: "check",
  },
  {
    feature: "Implements IAM role changes",
    typical: "cross",
    ours: "check",
    oursBenefit: "Hands-on",
  },
  {
    feature: "Configures AWS services (GuardDuty, etc.)",
    typical: "cross",
    ours: "check",
    typicalNote: "Advise only",
    oursBenefit: "We deploy",
  },
  {
    feature: "Tunes CrowdStrike SIEM ingestion",
    typical: "cross",
    ours: "check",
    typicalNote: "Not supported",
    oursBenefit: "Expert-led",
  },
  {
    feature: "Offers automation for evidence collection",
    typical: "cross",
    ours: "check",
    typicalNote: "Rare",
    oursBenefit: "Included",
  },
  {
    feature: "Provides real-time Slack/Email support",
    typical: "limited",
    ours: "check",
    typicalNote: "With delay",
    oursBenefit: "Direct access",
  },
  { feature: "Handles audit coordination", typical: "check", ours: "check" },
];

const services = [
  {
    icon: Search,
    title: "SOC 2 Readiness & Strategy",
    items: [
      "Gap assessments",
      "Trust Services Criteria mapping",
      "Custom roadmap creation",
    ],
  },
  {
    icon: FileText,
    title: "Documentation & Governance",
    items: [
      "Security policy pack (15+ tailored docs)",
      "Risk assessment + business continuity planning",
      "Incident response and access control plans",
    ],
  },
  {
    icon: Settings,
    title: "Hands-On Technical Implementation",
    items: [
      "IAM role restructuring and enforcement",
      "AWS GuardDuty, CloudTrail, Config, Inspector setup",
      "Secure-by-default S3, EC2, and IAM best practices",
      "CrowdStrike NextGen SIEM log ingestion & alert tuning",
      "Evidence automation scripts & dashboards",
    ],
  },
  {
    icon: RotateCcw,
    title: "Ongoing Compliance Support",
    items: [
      "Monthly artifact review",
      "Cloud drift detection",
      "Change management and access review automation",
    ],
  },
];

const ComparisonSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const renderIcon = (type: string, note?: string, benefit?: string) => {
    switch (type) {
      case "check":
        return <Check className="w-5 h-5 text-emerald-400" />;
      case "cross":
        return <X className="w-5 h-5 text-red-400" />;
      case "limited":
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      default:
        return null;
    }
  };

  return (
    <section ref={ref} id="the-difference" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Comparison Table */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary backdrop-blur-sm"
            >
              🆚 The Difference
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Typical Consultant</span>{" "}
              <span className="text-gradient">vs Our Team</span>
            </h2>
          </div>

          <Card className="max-w-6xl mx-auto glassmorphism overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-6 font-semibold text-foreground">
                      Feature / Service
                    </th>
                    <th className="text-center p-6 font-semibold text-muted-foreground">
                      Typical SOC 2 Consultant
                    </th>
                    <th className="text-center p-6 font-semibold text-primary">
                      Your Company
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-6 text-foreground">{row.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex flex-col items-center gap-1">
                          {renderIcon(row.typical)}
                          {row.typicalNote && (
                            <span className="text-xs text-muted-foreground">
                              {row.typicalNote}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex flex-col items-center gap-1">
                          {renderIcon(row.ours)}
                          {row.oursBenefit && (
                            <span className="text-xs text-primary font-medium">
                              {row.oursBenefit}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Services Section */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`p-8 glassmorphism hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg space-gradient flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
