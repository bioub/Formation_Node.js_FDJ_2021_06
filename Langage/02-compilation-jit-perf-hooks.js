const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });


function sum(a, b) {
  return a + b;
}

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, ['2']);
performance.measure('sum call', 'sum');

performance.mark('sum');
sum(1, 2);
performance.measure('sum call', 'sum');
