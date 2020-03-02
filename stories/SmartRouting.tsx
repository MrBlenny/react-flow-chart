import * as React from "react";
import { FlowChartWithState } from "../src";
import { Page } from "./components";
import { chartSimple } from "./misc/exampleChartState";

export const SmartRouting = () => {
  return (
    <Page>
      <FlowChartWithState
        config={{ smartRouting: true }}
        initialValue={chartSimple}
      />
    </Page>
  );
};
