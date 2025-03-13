export function StateStatus({ state }) {
  if (!state?.status) return null;

  return (
    <>
      {state.status === "error" && (
        <div className="p-4 rounded-lg bg-rose-50 border border-rose-200">
          <p className="text-sm text-rose-600 text-center">{state.message}</p>
        </div>
      )}
      {state.status === "success" && (
        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
          <p className="text-sm text-emerald-600 text-center">
            {state.message}
          </p>
        </div>
      )}
    </>
  );
}
