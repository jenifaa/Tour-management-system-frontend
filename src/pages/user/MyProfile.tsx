import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, ShieldCheck, Calendar } from "lucide-react";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function MyProfile() {
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium">
        Loading profile...
      </div>
    );
  }

  const user = data?.data || data;

  const initials = user?.name
    ?.split(" ")
    ?.map((word:string) => word[0])
    ?.join("")
    ?.toUpperCase();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-slate-200 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 rounded-3xl shadow-xl border-0 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-500 to-purple-600 h-32" />

          <CardContent className="relative flex flex-col items-center pt-0 pb-8 px-6">
            <Avatar className="w-28 h-28 border-4 border-white shadow-lg -mt-14">
              <AvatarFallback className="text-3xl font-bold bg-slate-900 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>

            <h1 className="mt-4 text-2xl font-bold text-slate-800 text-center">
              {user?.name}
            </h1>

            <p className="text-slate-500 mt-1">{user?.email}</p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
              <Badge className="px-4 py-1 text-sm rounded-full bg-indigo-600 hover:bg-indigo-600">
                {user?.role}
              </Badge>

              <Badge
                variant="outline"
                className="px-4 py-1 text-sm rounded-full"
              >
                {user?.isVerified ? "Verified" : "Not Verified"}
              </Badge>

              <Badge
                className={`px-4 py-1 text-sm rounded-full ${
                  user?.isActive === "ACTIVE"
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-red-600 hover:bg-red-600"
                }`}
              >
                {user?.isActive}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email Address</p>
                    <p className="font-semibold text-slate-800 break-all">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="p-3 rounded-xl bg-green-100 text-green-600">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Phone Number</p>
                    <p className="font-semibold text-slate-800">
                      {user?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="font-semibold text-slate-800">
                      {user?.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Account Status</p>
                    <p className="font-semibold text-slate-800">
                      {user?.isDeleted ? "Deleted" : "Active Account"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                  <Calendar size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Account Information
                  </h2>
                  <p className="text-sm text-slate-500">
                    Details about your account
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-500">Created At</span>
                  <span className="font-semibold text-slate-800">
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-500">Role</span>
                  <span className="font-semibold text-slate-800">
                    {user?.role}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-slate-500">Verification</span>
                  <span className="font-semibold text-green-600">
                    {user?.isVerified ? "Verified" : "Not Verified"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Status</span>
                  <span className="font-semibold text-indigo-600">
                    {user?.isActive}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
