import { CircularProgress } from "@nextui-org/react";

interface Props {
  text: string;
  color?: "primary" | "success" | "warning" | "default" | "secondary" | "danger";
}

function ProgressCircle({ text, color = "primary" }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-slate-800 bg-opacity-50 backdrop-blur-sm">
      <div className="flex-col items-center justify-center">
        <CircularProgress label={text} color={color} />
      </div>
    </div>
  );
}

export default ProgressCircle;
