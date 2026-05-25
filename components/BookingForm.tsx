import { cars } from "@/data/cars";

type FieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

function Field({ id, label, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#07111f]">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const inputClass =
  "min-h-12 w-full rounded-[8px] border border-[#d8dde5] bg-white px-4 text-sm text-[#07111f] outline-none transition placeholder:text-[#94a3b8] focus:border-[#c89400] focus:ring-4 focus:ring-[#f5b301]/20";

export function BookingForm() {
  return (
    <form
      action="/booking/whatsapp"
      method="get"
      target="_blank"
      className="rounded-[8px] border border-[#e7ebf0] bg-white p-5 shadow-[0_24px_70px_rgba(7,17,31,0.10)] sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Full name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </Field>
        <Field id="phone" label="Phone number">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+92 300 0000000"
            className={inputClass}
          />
        </Field>
        <Field id="pickup" label="Pickup location">
          <input
            id="pickup"
            name="pickup"
            type="text"
            required
            placeholder="Pickup address or area"
            className={inputClass}
          />
        </Field>
        <Field id="dropoff" label="Drop-off location">
          <input
            id="dropoff"
            name="dropoff"
            type="text"
            required
            placeholder="Destination or drop-off area"
            className={inputClass}
          />
        </Field>
        <Field id="date" label="Date">
          <input
            id="date"
            name="date"
            type="date"
            required
            className={inputClass}
          />
        </Field>
        <Field id="time" label="Time">
          <input
            id="time"
            name="time"
            type="time"
            required
            className={inputClass}
          />
        </Field>
        <Field id="carType" label="Car type">
          <select id="carType" name="carType" required className={inputClass}>
            <option value="">Select a car</option>
            {cars.map((car) => (
              <option key={car.slug} value={car.name}>
                {car.name}
              </option>
            ))}
            <option value="Not sure">Not sure, please recommend</option>
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field id="message" label="Message">
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share passenger count, trip type, luggage, or special requests"
              className={`${inputClass} resize-y py-3`}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#07111f] px-6 text-sm font-semibold text-white transition hover:bg-[#132033] focus:outline-none focus:ring-4 focus:ring-[#f5b301]/30"
      >
        Submit Booking on WhatsApp
      </button>
    </form>
  );
}
