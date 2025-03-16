import CurriculumForm from "../../../components/CurriculumForm";

export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">What do you want to learn..?</h1>
      </div>
      <CurriculumForm />
    </div>
  );
}
