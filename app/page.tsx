'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Scale, BookOpen, Heart, GraduationCap, Briefcase, Shield, HeartPulse, Ban, Car, Users, ArrowDown } from 'lucide-react';

export default function Home() {
  const scrollToContent = () => {
    document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Latvian Youth Laws</h1>
            </div>
            <Button variant="outline" size="sm" onClick={scrollToContent}>
              Explore
            </Button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Legal Information</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Understanding Your Rights<br />
            <span className="text-blue-600">and Responsibilities</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            A comprehensive guide to the laws that shape the lives of young people in Latvia
          </p>
          <Button size="lg" onClick={scrollToContent} className="bg-blue-600 hover:bg-blue-700">
            Get Started
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card id="introduction" className="mb-12 border-2 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">
              There is no single exact number of laws in Latvia, as legal acts are constantly being adopted, amended, or repealed. As of January 2024, approximately <strong>8,820 laws</strong> have been adopted in Latvia, of which around <strong>6,707 are currently in force</strong>.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              In practice, almost all laws apply to young people as well; however, specific legal norms are designed for minors to account for their age, maturity, and need for protection. Approximately <strong>10–15 key laws</strong> are directly aimed at children and young people under the age of 18.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-8">
          <LawSection
            icon={<Heart className="h-6 w-6" />}
            title="Family and Personal Rights"
            color="rose"
            laws={[
              {
                title: 'Protection of the Rights of the Child Law',
                description: 'This is the primary law governing children\'s rights, safety, and protection in Latvia. It defines the legal status of the child, the responsibilities of parents and the state, and protection against violence and neglect. The law establishes criteria for determining the best interests of the child.',
                details: (
                  <div>
                    <p className="mb-3 text-slate-700">In addition to rights, the law defines the child's duties:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>the duty to care for oneself according to age and to participate in household tasks </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>the duty to treat parents, guardians, and other family members with respect</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>the duty to respect the state, its symbols, and comply with laws</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>the duty to protect one's health and the environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>the duty to learn according to one's abilities and comply with school internal rules</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-rose-600">•</span>
                        <span>To see the full list click  <a href="https://likumi.lv/ta/id/49096-bernu-tiesibu-aizsardzibas-likums
"  target='_blank'> here
</a></span>
                      </li>
                    </ul>
                  </div>
                )
              },
              {
                title: 'Civil Law',
                description: ( <>The Civil Law regulates the legal capacity of minors, guardianship, property rights, and limitations on legal transactions. It governs parental custody and defines which legal actions minors may or may not perform independently. Minors have limited legal capacity, and significant transactions are carried out by parents or legal guardians. <br /> To see the full list click <a href="https://likumi.lv/ta/id/225418-civillikums" target='_blank'>here</a></> )
                
              },
              {
                title: 'Orphan\'s Court Law',
                description: ( <>The Orphans Court Law regulates guardianship, adoption, and child protection matters. Orphans courts supervise the protection of childrens rights and make decisions when a childs interests are not adequately protected within the family. <br />To see the full list click <a href="https://likumi.lv/ta/id/139369-barintiesu-likums"target='_blank'>here</a></> )
              }
            ]}
          />

          <LawSection
            icon={<GraduationCap className="h-6 w-6" />}
            title="Education"
            color="blue"
            laws={[
              {
                title: 'Education Law',
                description: ( <>The Education Law establishes compulsory education until the age of 18. It guarantees students the right to safe learning conditions, quality education, and respectful treatment, while also imposing the duty to attend school regularly and meet curriculum requirements. <br />To see the full list click <a href="https://likumi.lv/ta/id/50759-izglitibas-likums" target='_blank'>here</a></> )
              },
              {
                title: 'General Education Law',
                description: ( <>This law provides detailed regulation of the learning process, school environment, safety, and student responsibilities. Students must comply with school rules and respect other participants in the educational process. <br />To see the full list click <a href="https://likumi.lv/ta/id/20243-visparejas-izglitibas-likums"target='_blank'>here</a></> )
              } 
            ]}
          />

          <LawSection
            icon={<Briefcase className="h-6 w-6" />}
            title="Employment and Work"
            color="emerald"
            laws={[
              {
                title: 'Labour Law',
                description: 'The Labour Law sets out special provisions for the employment of minors. The aim is to ensure that work does not harm a young person\'s health, education, or development.',
                details: (
                  <div>
                    <p className="mb-3 text-slate-700">Special provisions include:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span>restrictions on working hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span>prohibition of hazardous or health‑damaging work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span>mandatory health examinations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span>enhanced labour protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-emerald-600">•</span>
                        <span>To see the full list click  <a href="https://likumi.lv/ta/id/26019-darba-likums
"  target='_blank'> here
</a></span>
                      </li>
                    </ul>
                  </div>
                )
              }
            ]}
          />

          <LawSection
            icon={<Shield className="h-6 w-6" />}
            title="Liability and Offences"
            color="amber"
            laws={[
              {
                title: 'Criminal Law',
                description: ( <>The Criminal Law establishes the age of criminal liability and special penalties applicable to minors. It provides a differentiated approach to punishment, taking into account the age and personal development of the minor. <br />To see the full list click <a href="https://likumi.lv/ta/id/88966-kriminallikums
" target='_blank'>here</a></> )
              },
              {
                title: 'Administrative Liability Law',
                description: ( <>This law regulates administrative liability for minors for offences such as alcohol consumption, smoking, public order violations, and other administrative infringements. <br />To see the full list click <a href="https://likumi.lv/ta/id/303007-administrativas-atbildibas-likums" target='_blank'>here</a></> )
              }
            ]}
          />

          <LawSection
            icon={<HeartPulse className="h-6 w-6" />}
            title="Health and Social Protection"
            color="cyan"
            laws={[
              {
                title: 'Health Care Law',
                description:  ( <>The Health Care Law defines minors rights to medical care and the requirement for parental or guardian consent for treatment in certain cases. <br />To see the full list click <a href="https://likumi.lv/ta/id/296188-veselibas-aprupes-finansesanas-likums
" target='_blank'>here</a></> )
              },
              {
                title: 'Patient Rights Law',
                description: ( <>The Patient Rights Law ensures that minors receive information about their health in a manner appropriate to their age and maturity and guarantees respectful treatment during medical care. <br />To see the full list click <a href="https://likumi.lv/ta/id/203008-pacientu-tiesibu-likums
" target='_blank'>here</a></> )
              },
              {
                title: 'Social Services and Social Assistance Law',
                description: ( <>This law regulates social support for children and families, including special provisions for children in out‑of‑home care. <br />To see the full list click <a href="https://likumi.lv/ta/id/68488-socialo-pakalpojumu-un-socialas-palidzibas-likums" target='_blank'>here</a></> )
              }
            ]}
          />

          <LawSection
            icon={<Ban className="h-6 w-6" />}
            title="Substances and Prohibitions"
            color="red"
            laws={[
              {
                title: 'Alcohol Handling Law',
                description: ( <>Prohibits minors from purchasing, consuming, or possessing alcoholic beverages. <br />To see the full list click <a href="https://likumi.lv/ta/id/88009-alkoholisko-dzerienu-aprites-likums">here</a></> )
              },
              {
                title: 'Tobacco Products Handling Law',
                description: ( <>Prohibits the purchase and use of tobacco products and similar products by persons under the age of 18. <br />To see the full list click <a href="https://likumi.lv/ta/id/282077-tabakas-izstradajumunbsptabakas-aizstajejproduktu-augu-smekesanas-produktu-elektronisko-smekesanas-iericu-un-to-skidrumu-aprites-likums" target='_blank'>here</a></> )
              },
              {
                title: 'Narcotic and Psychotropic Substances Handling Law',
                description: ( <>Establishes prohibitions for minors regarding the possession, use, and distribution of narcotic and psychotropic substances, as well as liability for violations. <br />To see the full list click <a href="https://likumi.lv/ta/id/40283-narkotisko-un-psihotropo-vielu-un-zalu-ka-ari-prekursoru-likumigas-aprites-likums" target='_blank'>here</a></> )
              }
            ]}
          />

          <LawSection
            icon={<Car className="h-6 w-6" />}
            title="Traffic and Everyday Obligations"
            color="slate"
            laws={[
              {
                title: 'Road Traffic Law',
                description: ( <>Regulates rules applicable to minor cyclists, electric scooter and moped users, and sets age limits for obtaining driving licences. <br />To see the full list click <a href="https://likumi.lv/ta/id/45467-celu-satiksmes-likums" target='_blank'>here</a></> )
              },
              {
                title: 'Declaration of Place of Residence Law',
                description: ( <>Establishes procedures for declaring a childs place of residence and the responsibility of parents or guardians to ensure compliance. <br />To see the full list click <a href="https://likumi.lv/ta/id/64328-dzivesvietas-deklaresanas-likums" target='_blank'>here</a></> )
              }
            ]}
          />

          <LawSection
            icon={<Users className="h-6 w-6" />}
            title="Youth Participation"
            color="teal"
            laws={[
              {
                title: 'Youth Law',
                description: ( <>Applies to young people aged 13 to 25. It regulates youth participation in public life, the operation of youth organisations, and state support mechanisms for young people. <br />To see the full list click <a href="https://likumi.lv/ta/id/175920-jaunatnes-likums
" target='_blank'>here</a></> )
              }
            ]}
          />
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-10 w-10 text-blue-400 mx-auto mb-4" />
          <p className="text-lg mb-2">Latvian Youth Laws</p>
          <p className="text-sm text-slate-400">Understanding your rights and responsibilities</p>
          <p className="text-xs text-slate-500 mt-6">Information current as of January 2024</p>
        </div>
      </footer>
    </div>
  );
}

interface Law {
  title: string;
  description: string;
  details?: React.ReactNode;
}

interface LawSectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  laws: Law[];
}

function LawSection({ icon, title, color, laws }: LawSectionProps) {
  const colorClasses = {
    rose: 'text-rose-600 bg-rose-50 border-rose-200',
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    amber: 'text-amber-600 bg-amber-50 border-amber-200',
    cyan: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    red: 'text-red-600 bg-red-50 border-red-200',
    slate: 'text-slate-600 bg-slate-50 border-slate-200',
    teal: 'text-teal-600 bg-teal-50 border-teal-200'
  };

  const bgColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <Card className="border-2 bg-white shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
          <div className={`p-3 rounded-lg ${bgColor}`}>
            {icon}
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {laws.map((law, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-slate-900">{law.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2 space-y-3">
                  <p className="text-slate-700 leading-relaxed">{law.description}</p>
                  {law.details && <div className="mt-4">{law.details}</div>}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}