import { format, parseISO } from 'date-fns';

export default function JobCalendar({ jobs }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

    const jobsOnDate = jobs.filter(job => 
        format(parseISO(job.scheduledDate), 'yyyy-MM-dd') === 
            format(selectedDate, 'yyyy-MM-dd')
              );

                return (
                    <div className="p-4">
                          <h2 className="text-xl font-bold mb-4">Maintenance Calendar</h2>
                                {/* Calendar grid implementation */}
                                      <div className="mt-4">
                                              <h3>Jobs on {format(selectedDate, 'MMMM d, yyyy')}</h3>
                                                      {jobsOnDate.map(job => (
                                                                <div key={job.id}>{job.type} - {job.status}</div>
                                                                        ))}
                                                                              </div>
                                                                                  </div>
                                                                                    );
                                                                                    }