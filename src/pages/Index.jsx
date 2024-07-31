import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-white">Prometheus Metrics Overview</h1>
        <p className="text-xl text-blue-200">Understanding and Implementing Prometheus Metrics with Python</p>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        <Card className="bg-blue-700 text-white">
          <CardHeader>
            <CardTitle>Introduction to Prometheus</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. 
              It has become a popular choice for monitoring cloud-native environments due to its powerful data model, 
              flexible query language, and reliable alerting capabilities.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Metrics Overview Section */}
      <section className="mb-12">
        <Card className="bg-blue-700 text-white">
          <CardHeader>
            <CardTitle>What are Prometheus Metrics?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Prometheus metrics are numerical measurements collected at regular intervals. They provide insights 
              into the behavior and performance of systems and applications. Prometheus supports four main types of metrics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Counter:</strong> A cumulative metric that only increases (e.g., number of requests served).</li>
              <li><strong>Gauge:</strong> A metric that can go up and down (e.g., current memory usage).</li>
              <li><strong>Histogram:</strong> Samples observations and counts them in configurable buckets (e.g., request durations).</li>
              <li><strong>Summary:</strong> Similar to histogram, but also provides a total count and sum of observations.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Python Examples Section */}
      <section className="mb-12">
        <Card className="bg-blue-700 text-white">
          <CardHeader>
            <CardTitle>Python Examples</CardTitle>
            <CardDescription className="text-blue-200">Learn how to use Prometheus with Python</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full flex justify-between items-center bg-blue-600 text-white hover:bg-blue-500">
                    <span>Example 1: Setting up Prometheus client</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <pre className="bg-blue-800 p-4 rounded-md overflow-x-auto text-blue-100">
                    <code>{`
from prometheus_client import start_http_server, Counter

# Create a metric to track time spent and requests made.
REQUEST_TIME = Summary('request_processing_seconds', 'Time spent processing request')
REQUESTS = Counter('hello_worlds_total', 'Hello Worlds requested.')

# Decorate function with metric.
@REQUEST_TIME.time()
def process_request(t):
    time.sleep(t)
    REQUESTS.inc()

if __name__ == '__main__':
    # Start up the server to expose the metrics.
    start_http_server(8000)
    # Generate some requests.
    while True:
        process_request(random.random())
                    `}</code>
                  </pre>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full flex justify-between items-center bg-blue-600 text-white hover:bg-blue-500">
                    <span>Example 2: Using different metric types</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <pre className="bg-blue-800 p-4 rounded-md overflow-x-auto text-blue-100">
                    <code>{`
from prometheus_client import Counter, Gauge, Histogram, Summary

# Counter
c = Counter('my_failures', 'Description of counter')
c.inc()     # Increment by 1
c.inc(1.6)  # Increment by given value

# Gauge
g = Gauge('my_inprogress_requests', 'Description of gauge')
g.inc()      # Increment by 1
g.dec(10)    # Decrement by given value
g.set(4.2)   # Set to a given value

# Histogram
h = Histogram('request_latency_seconds', 'Description of histogram')
h.observe(4.7)    # Observe 4.7 (seconds in this case)

# Summary
s = Summary('request_latency_seconds', 'Description of summary')
s.observe(4.7)    # Observe 4.7 (seconds in this case)
                    `}</code>
                  </pre>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <Card className="bg-blue-700 text-white">
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Prometheus provides a powerful and flexible way to monitor your applications and infrastructure. 
              By understanding the different types of metrics and how to implement them in Python, you can gain 
              valuable insights into your systems' performance and behavior. We encourage you to explore Prometheus 
              further and integrate it into your monitoring stack for improved observability.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-blue-200">
        <p>© {currentYear} Prometheus Metrics Guide</p>
      </footer>
    </div>
  );
};

export default Index;