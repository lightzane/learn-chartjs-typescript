import { ChartType } from "chart.js";
import { Bar, Line, Pie } from "./my-charts";

export const create = (type: ChartType, elementId: string) => {
    switch (type) {
        case 'line': {
            Line(elementId);
            break;
        }
        case 'pie': {
            Pie(elementId);
            break;
        }
        case 'bar': {
            Bar(elementId);
            break;
        }
    }
};
