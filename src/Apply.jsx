// Apply.jsx — network-disabled version (keeps UI, disables API)
import { useState } from "react";

export default function Apply() {
  const fields = [
    {
      title: "email",
      placeholder: "johnjohnson@example.com",
    },
    {
      title: "message",
      placeholder: "Please include any relevant information or links here.",
      area: true,
      required: false,
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col gap-12 items-center px-8 lg:px-28 md:px-20 sm:px-14 pt-12 pb-32 bg-gray-50">
      <div className="z-0 relative flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold">Join our team</h1>
          <hr className="border-4 w-12 border-emerald-600" />
        </div>
        <p className="max-w-[75ch]">
          Are you ready to make a positive impact in your community? Fill out
          this application form below. Note: online submissions are currently
          disabled; please email us at contact@soccerforchange.org to apply.
        </p>
      </div>

      <div className="flex-1">
        <FormCard
          fields={fields}
          button="Submit Application"
          endpoint="apply" /* kept for UI reuse but unused */
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FormCard: local-only handling (no network)                                  */
/* -------------------------------------------------------------------------- */
export function FormCard({ fields, button, title = null /*, endpoint */ }) {
  const initialFormData = fields.reduce(
    (acc, field) => {
      acc[field.title] = field.value || "";
      return acc;
    },
    {
      firstName: "",
      lastName: "",
      email: "",
    }
  );

  const [formData, setFormData] = useState(initialFormData);
  const [postSuccess, setPostSuccess] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const isFormValid = Object.entries(formData).every(
    ([key, value]) => key === "message" || value.trim() !== ""
  );

  function handleChange(e, key) {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  }

  /* Disabled network submit — safe local handling only */
  const handlePostClick = async () => {
    // Basic client-side validation
    if (!isFormValid) {
      setPostSuccess({ success: false, message: "Please complete all required fields." });
      return;
    }

    setSubmitting(true);
    try {
      // DON'T call any remote API. Instead, present a friendly message.
      // You can later re-enable real submissions by replacing this block.
      await new Promise((r) => setTimeout(r, 600)); // small UX pause
      setPostSuccess({
        success: true,
        message:
          "Form submissions are currently disabled. Please email your application to contact@soccerforchange.org. Thank you!",
      });
    } catch (err) {
      setPostSuccess({
        success: false,
        message: "An unexpected error occurred. Please email contact@soccerforchange.org.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-12 shadow-lg min-w-fit rounded-lg relative bg-white flex flex-col items-start gap-6">
      {title && <h1 className="text-2xl font-semibold">{title}</h1>}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <InputField
          title="First Name"
          placeholder="John"
          onChange={(e) => handleChange(e, "firstName")}
        />
        <InputField
          title="Last Name"
          placeholder="Johnson"
          onChange={(e) => handleChange(e, "lastName")}
        />
      </div>

      {fields
        .filter((field) => !field.title.toLowerCase().includes("id"))
        .map((field, index) => (
          <InputField
            {...field}
            onChange={(e) => handleChange(e, field.title)}
            key={index}
          />
        ))}

      <div className="flex gap-6 items-center">
        <button
          className={`flex-1 px-5 uppercase tracking-wide py-3 ${
            isFormValid ? "bg-emerald-600 shadow" : "bg-gray-300"
          } rounded text-white text-xs font-semibold transition-all`}
          onClick={isFormValid && !submitting ? handlePostClick : () => {}}
          disabled={!isFormValid || submitting}
        >
          {submitting ? "Submitting..." : button}
        </button>

        {postSuccess !== null && (
          <p
            className={`font-semibold ${
              postSuccess.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {postSuccess.message}
          </p>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* InputField component (unchanged)                                            */
/* -------------------------------------------------------------------------- */
function InputField({
  title,
  placeholder,
  onChange,
  area = false,
  required = true,
}) {
  const styling = "w-full rounded bg-gray-100 px-4 py-2 font-light";

  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="uppercase tracking-wide text-xs font-semibold">
        {title}
        {required && <span className="text-red-500"> *</span>}
      </h3>
      {area ? (
        <textarea
          rows={4}
          cols={50}
          className={styling}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <input
          className={styling}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
}
