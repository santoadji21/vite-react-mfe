import React from "react";
import { Card, Metric, Text } from "@tremor/react";

export default function CardGroup() {
  return (
    <div>
      <Card maxWidth='max-w-xs' decoration='top' decorationColor='indigo'>
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  );
}
