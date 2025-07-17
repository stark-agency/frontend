import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import {TextInput} from "@/app/src/shared/textInput";
import {SharedButton} from "@/app/src/shared/Button";

interface ContactProps {
  isDark: boolean;
  starkOrange: string;
}

export default function Contact({ isDark, starkOrange }: ContactProps) {
  return (
    <section
      id="contact"
      className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to Scale Your Brand?
          </h2>
          <p
            className={`text-lg md:text-xl mb-4 transition-colors duration-300 leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Your local partner for global ambition. Let's build something extraordinary together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`p-8 rounded-lg border transition-colors duration-300 ${
              isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get Started Today
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  placeholder="First Name"
                  className={`transition-colors px-3 duration-300 rounded-md border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  }`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                />
                <TextInput
                  placeholder="Last Name"
                  className={`transition-colors px-3 duration-300 rounded-md border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                  }`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                    type="email"
                    placeholder="Email Address"
                    className={`transition-colors px-3 duration-300 rounded-md border ${
                        isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                            : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    }`}
                    style={{ fontFamily: "Lato, sans-serif" }}
                />
                <TextInput
                    placeholder="Company Name"
                    className={`transition-colors px-3 duration-300 rounded-md border ${
                        isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                            : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    }`}
                    style={{ fontFamily: "Lato, sans-serif" }}
                />
              </div>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className={`w-full p-3 rounded-md border transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                }`}
                style={{ fontFamily: "Lato, sans-serif" }}
              />
              <SharedButton
                className="w-full text-white font-bold py-3 hover:opacity-90 transition-opacity tracking-wide flex items-center justify-center"
                style={{ backgroundColor: starkOrange, fontFamily: "Montserrat, sans-serif" }}
              >
                <span className="flex items-center gap-2">
                  Let's Build Something Amazing
                  <ArrowRight className="h-5 w-5" />
                </span>
              </SharedButton>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
                  >
                    <Mail className="h-5 w-5" style={{ color: starkOrange }} />
                  </div>
                  <div>
                    <p
                      className={`font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Email
                    </p>
                    <p
                      className={`transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      hello@starkagency.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
                  >
                    <Phone className="h-5 w-5" style={{ color: starkOrange }} />
                  </div>
                  <div>
                    <p
                      className={`font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Phone
                    </p>
                    <p
                      className={`transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      +962 XX XXX XXXX
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: starkOrange }} />
                  </div>
                  <div>
                    <p
                      className={`font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Location
                    </p>
                    <p
                      className={`transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      Amman, Jordan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h4
                className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
