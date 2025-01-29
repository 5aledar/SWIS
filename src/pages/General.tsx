import PaymentChart from "@/features/general/components/PaymentChart";
import { PieChartComponent } from "@/features/general/components/PieChart";
import { TraficChart } from "@/features/general/components/TraficChart";

const General = () => {
  return (
    <div className="flex-col flex gap-4 ">
      <div className="flex gap-4 sm:flex-row items-center flex-col">
        <PaymentChart />
        <TraficChart />
      </div>
      <PieChartComponent />
    </div>
  );
};

export default General;
