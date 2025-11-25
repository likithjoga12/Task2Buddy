export default function ProgressBar({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div>
      <h3>Progress: {percentage.toFixed(1)}%</h3>
      <div className="bar">
        <div className="progress" style={{ width: `${percentage}%` }}>
        </div>
                    {tasks.text} completed: {completed} / {total}

      </div>
    </div>
  );
}
