import DefaultLayout from "@/components/Layouts/DefaultLayout";
const StudenPage = () => {
  const data = [
        {
          user: {
            name: "John Doe",
            image: "https://picsum.photos/id/237/200/300",
          },
          commit: {
            sha: "abc123",
            branch: "main",
          },
          status: "Completed",
          duration: "1 hour",
          deployedAt: "2024-03-30 10:00:00",
        },
        {
          user: {
            name: "John Doe",
            image: "https://picsum.photos/id/237/200/300",
          },
          commit: {
            sha: "abc123",
            branch: "main",
          },
          status: "Completed",
          duration: "1 hour",
          deployedAt: "2024-03-30 10:00:00",
        },
        {
          user: {
            name: "John Doe",
            image: "https://picsum.photos/200",
          },
          commit: {
            sha: "abc123",
            branch: "main",
          },
          status: "Completed",
          duration: "1 hour",
          deployedAt: "2024-03-30 10:00:00",
        },
        {
          user: {
            name: "John Doe",
            image: "https://picsum.photos/200",
          },
          commit: {
            sha: "abc123",
            branch: "main",
          },
          status: "Error",
          duration: "1 hour",
          deployedAt: "2024-03-30 10:00:00",
        },
        // Add more mock data here
      ];
    
      return (
        <DefaultLayout>
        <div className="bg-gray-900 rounded-lg p-4 font-raleway m-5">
          <h2 className="text-white text-lg font-bold mb-4">User Activity</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-white border-b border-gray-500 pb-3">
                  User
                </th>
                <th className="text-left text-white font-bold border-b border-gray-500 pb-3">
                  Commit
                </th>
                <th className="text-left text-white font-bold border-b border-gray-500 pb-3">
                  Status
                </th>
                <th className="text-left text-white font-bold border-b border-gray-500 pb-3">
                  Duration
                </th>
                <th className="text-left text-white font-bold border-b border-gray-500 pb-3">
                  Deployed At
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-gray-500">
                  <td className="flex flex-row text-white py-4 text-sm">
                    <img
                      className="w-6 h-6 rounded-full mr-2"
                      src={item.user.image}
                      alt={item.user.name}
                    />
                    {item.user.name}
                  </td>
                  <td className="text-gray-500 py-4">
                    <div className="flex items-center">
                      <span>{item.commit.sha}</span>
                      <div className="bg-gray-500 w-2 h-2 rounded-full mx-2" />
                      <span className="border border-gray-500 rounded px-2">
                        {item.commit.branch}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          item.status === "Completed"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className="text-white text-sm">{item.status}</span>
                    </div>
                  </td>
                  <td className="text-gray-500 py-4">{item.duration}</td>
                  <td className="text-gray-500 py-4">{item.deployedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </DefaultLayout>
      );
    }
    export default StudenPage