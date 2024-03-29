'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveLine } from "@nivo/line"

export function Emission() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <TrendingUpIcon className="h-4 w-4" />
                Performance
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <ActivityIcon className="h-4 w-4" />
                Emissions
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">Emissions </h1>
            <div className="ml-auto flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-[200px] justify-start text-left font-normal" id="date" variant="outline">
                    <CalendarClockIcon className="mr-2 h-4 w-4" />
                    June 01, 2023 - June 30, 2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-auto p-0">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-4 p-4 md:p-8">
                <div className="flex flex-col gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Operations</CardDescription>
                      <CardTitle>Live Emissions</CardTitle>
                      <Badge variant="outline">Live</Badge>
                      <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <RefreshCwIcon className="h-4 w-4" />
                        <span className="sr-only">Refresh</span>
                      </Button>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="grid gap-1.5 text-center">
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Production</span>
                          <span className="text-sm ml-auto">0.25 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Packaging</span>
                          <span className="text-sm ml-auto">0.15 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Shipping</span>
                          <span className="text-sm ml-auto">0.10 kg/s</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Warehouse</CardDescription>
                      <CardTitle>Live Emissions</CardTitle>
                      <Badge variant="outline">Live</Badge>
                      <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <RefreshCwIcon className="h-4 w-4" />
                        <span className="sr-only">Refresh</span>
                      </Button>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="grid gap-1.5 text-center">
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Receiving</span>
                          <span className="text-sm ml-auto">0.05 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Storage</span>
                          <span className="text-sm ml-auto">0.10 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Picking</span>
                          <span className="text-sm ml-auto">0.08 kg/s</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Office</CardDescription>
                      <CardTitle>Live Emissions</CardTitle>
                      <Badge variant="outline">Live</Badge>
                      <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <RefreshCwIcon className="h-4 w-4" />
                        <span className="sr-only">Refresh</span>
                      </Button>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="grid gap-1.5 text-center">
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Heating</span>
                          <span className="text-sm ml-auto">0.02 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Lighting</span>
                          <span className="text-sm ml-auto">0.03 kg/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold">Computing</span>
                          <span className="text-sm ml-auto">0.01 kg/s</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Live Emissions</CardDescription>
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <CardDescription>Operations</CardDescription>
                    <Badge variant="outline">Live</Badge>
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                      <RefreshCwIcon className="h-4 w-4" />
                      <span className="sr-only">Refresh</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1.5 text-center">
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Production</span>
                        <span className="text-sm ml-auto">0.25 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Packaging</span>
                        <span className="text-sm ml-auto">0.15 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Shipping</span>
                        <span className="text-sm ml-auto">0.10 kg/s</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <CardDescription>Warehouse</CardDescription>
                    <Badge variant="outline">Live</Badge>
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                      <RefreshCwIcon className="h-4 w-4" />
                      <span className="sr-only">Refresh</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1.5 text-center">
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Receiving</span>
                        <span className="text-sm ml-auto">0.05 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Storage</span>
                        <span className="text-sm ml-auto">0.10 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Picking</span>
                        <span className="text-sm ml-auto">0.08 kg/s</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <CardDescription>Office</CardDescription>
                    <Badge variant="outline">Live</Badge>
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                      <RefreshCwIcon className="h-4 w-4" />
                      <span className="sr-only">Refresh</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1.5 text-center">
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Heating</span>
                        <span className="text-sm ml-auto">0.02 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Lighting</span>
                        <span className="text-sm ml-auto">0.03 kg/s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold">Computing</span>
                        <span className="text-sm ml-auto">0.01 kg/s</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Emissions Breakdown</CardDescription>
              <CardTitle>by Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="grid gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Department</CardDescription>
                      <CardTitle>Operations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CurvedlineChart className="aspect-[2/1]" />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Department</CardDescription>
                      <CardTitle>Warehouse</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CurvedlineChart className="aspect-[2/1]" />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-1.5">
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <CardDescription>Department</CardDescription>
                      <CardTitle>Office</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CurvedlineChart className="aspect-[2/1]" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function CalendarClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.25V14" />
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </svg>
  )
}


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
