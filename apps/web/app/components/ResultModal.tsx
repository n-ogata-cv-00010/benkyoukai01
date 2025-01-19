type ResultModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "success" | "error";
};

export function ResultModal({
  isOpen,
  onClose,
  message,
  type,
}: ResultModalProps) {
  if (!isOpen) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <p className="text-gray-800 mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 text-white rounded ${bgColor} hover:${
              type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
