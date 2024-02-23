
// Wrap the section of code you want to profile
// with the React.Profiler component.
<React.Profiler id="example" onRender={callback}>
  {/* Your code to profile */}
</React.Profiler>;

// Define a callback function (onRender) that
// will be called whenever the component tree
// within the Profiler is committed.
function callback(id,phase,actualDuration,baseDuration,
  startTime,commitTime
) {
  // Process profiling data
  // Start time, End Time, Execution Time
}

