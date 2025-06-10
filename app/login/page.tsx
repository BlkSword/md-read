'use client';

import { Card, CardBody } from "@heroui/react";
import { Input, Button } from "@heroui/react";

export default function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-30">
            <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
                <CardBody className="flex flex-col gap-4">
                    {/* 账号输入框 */}
                    <Input
                        isRequired
                        className="max-w-xs self-center"
                        defaultValue=""
                        label="账号"
                        type="text"
                    />

                    {/* 密码输入框 */}
                    <Input
                        isRequired
                        className="max-w-xs self-center"
                        defaultValue=""
                        label="密码"
                        type="password"
                    />

                    {/* 登录按钮 */}
                    <Button
                        color="primary"
                        className="self-center w-full max-w-xs mt-2"
                    >
                        登录
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}