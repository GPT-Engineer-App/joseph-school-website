import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="space-y-8">
      {/* School History */}
      <section>
        <h2 className="text-2xl font-bold">Our History</h2>
        <Separator className="my-4" />
        <p>
          St Joseph Secondary School and Primary was founded in [Year] with the
          mission to provide quality education to students in our community. Our
          school has a rich history of academic excellence and community
          involvement.
        </p>
      </section>

      {/* Mission and Vision */}
      <section>
        <h2 className="text-2xl font-bold">Mission and Vision</h2>
        <Separator className="my-4" />
        <p>
          Our mission is to provide a nurturing and challenging environment that
          empowers students to reach their full potential. Our vision is to be a
          leading educational institution recognized for our commitment to
          academic excellence, character development, and community engagement.
        </p>
      </section>

      {/* Leadership Team */}
      <section>
        <h2 className="text-2xl font-bold">Leadership Team</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about the principal...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vice Principal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about the vice principal...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Head of Primary School</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about the head of primary school...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;