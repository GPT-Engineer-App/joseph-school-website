import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Academics = () => {
  return (
    <div className="space-y-8">
      {/* Academic Programs */}
      <section>
        <h2 className="text-2xl font-bold">Academic Programs</h2>
        <Separator className="my-4" />
        <p>
          At St Joseph Secondary School and Primary, we offer a wide range of
          academic programs designed to meet the needs of our diverse student
          body. Our programs are designed to challenge and inspire students to
          reach their full potential.
        </p>
      </section>

      {/* Curriculum */}
      <section>
        <h2 className="text-2xl font-bold">Curriculum</h2>
        <Separator className="my-4" />
        <p>
          Our curriculum is designed to provide a well-rounded education that
          prepares students for success in college and beyond. We offer a
          rigorous academic program that includes [Details about the curriculum...]
        </p>
      </section>

      {/* Extracurricular Activities */}
      <section>
        <h2 className="text-2xl font-bold">Extracurricular Activities</h2>
        <Separator className="my-4" />
        <p>
          In addition to our academic programs, we offer a wide range of
          extracurricular activities that allow students to explore their
          interests and develop new skills. Our extracurricular programs include
          [Details about extracurricular activities...]
        </p>
      </section>
    </div>
  );
};

export default Academics;