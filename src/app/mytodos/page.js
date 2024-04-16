export default function Mytodos() {
    const data = [
        {
            task: "Task 1",
            date: "10-04-2024",
            status: false
        },
        {
            task: "Task 2",
            date: "10-04-2024",
            status: false
        },
        {
            task: "Task 3",
            date: "10-04-2024",
            status: true
        }
    ]
    return (
      <main className="container-fluid py-3">
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Task</th>
                        <th>Date of Creation</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.task}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status ? "Completed" : "Pending"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </main>
    )
    }