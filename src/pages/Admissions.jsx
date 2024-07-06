import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  return (
    <div className="space-y-8">
      {/* Admissions Process */}
      <section>
        <h2 className="text-2xl font-bold">Admissions Process</h2>
        <Separator className="my-4" />
        <p>
          Our admissions process is designed to be straightforward and
          transparent. We welcome students from diverse backgrounds and strive
          to make the admissions process as smooth as possible.
        </p>
      </section>

      {/* Requirements */}
      <section>
        <h2 className="text-2xl font-bold">Requirements</h2>
        <Separator className="my-4" />
        <p>
          To apply for admission, students must meet the following requirements:
          [List of requirements...]
        </p>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold">Admissions Inquiry</h2>
        <Separator className="my-4" />
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input id="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default Admissions;