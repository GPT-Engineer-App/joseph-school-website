import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gray-200">
        <img
          src="/placeholder.svg"
          alt="School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to St Joseph Secondary School and Primary</h1>
          <p className="mt-4 text-lg">Empowering students for a brighter future</p>
          <Button className="mt-6">Learn More</Button>
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-2xl font-bold">Latest News</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>News Item 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about news item 1...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>News Item 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about news item 2...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>News Item 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about news item 3...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Event 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about event 1...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Event 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about event 2...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Event 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details about event 3...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Mission */}
      <section>
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <Separator className="my-4" />
        <p>
          At St Joseph Secondary School and Primary, our mission is to provide a
          nurturing and challenging environment that empowers students to reach
          their full potential. We are committed to academic excellence,
          character development, and community engagement.
        </p>
      </section>
    </div>
  );
};

export default Index;