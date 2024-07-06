import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ContactUs = () => {
  return (
    <div className="space-y-8">
      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold">Contact Us</h2>
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

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <Separator className="my-4" />
        <p>
          <strong>Address:</strong> 123 School Lane, Education City, Country
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@stjosephschool.edu
        </p>
      </section>

      {/* Google Map */}
      <section>
        <h2 className="text-2xl font-bold">Our Location</h2>
        <Separator className="my-4" />
        <div className="w-full h-[400px] bg-gray-200">
          <img
            src="/placeholder.svg"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;