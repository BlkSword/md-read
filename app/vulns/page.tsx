'use client';

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

export default function VulnListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className={title()}>漏洞列表</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card isPressable className="p-4 bg-white rounded-lg shadow-md border border-gray-200 ">
          <CardBody>
            <h3 className="text-lg font-medium">CVE-2023-1234 - Apache Struts2 远程代码执行漏洞</h3>
            <p className="mt-2 text-gray-600">Vulhub复现环境：struts2/s2-057</p>
          </CardBody>
        </Card>
        <Card isPressable className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <CardBody>
            <h3 className="text-lg font-medium">CVE-2022-22965 - Spring Cloud Gateway 远程代码执行漏洞</h3>
            <p className="mt-2 text-gray-600">Vulhub复现环境：spring-cloud-gateway/CVE-2022-22965</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}