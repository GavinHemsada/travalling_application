"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useTranslations } from "next-intl";

export default function CustomTourForm() {
  const supabase = createClient();
  const t = useTranslations('CustomTours');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    startDate: "",
    duration: "",
    travelers: "",
    interests: "",
    budget: "",
    pickupLocation: "",
    specialRequirements: "",
    additionalMessage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      start_date: formData.startDate,
      duration_days: parseInt(formData.duration) || 0,
      number_of_travelers: parseInt(formData.travelers) || 0,
      tour_interests: formData.interests,
      budget_per_person: formData.budget,
      pickup_location: formData.pickupLocation,
      special_requirements: formData.specialRequirements,
      additional_message: formData.additionalMessage,
    };

    const { error } = await supabase.from("custom_tours").insert([payload]);

    setIsSubmitting(false);

    if (error) {
      if (error.message.includes('relation "public.custom_tours" does not exist')) {
          setErrorMsg(t('error_db_missing'));
      } else {
        setErrorMsg(error.message);
      }
    } else {
      setSuccessMsg(t('success_msg'));
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        startDate: "",
        duration: "",
        travelers: "",
        interests: "",
        budget: "",
        pickupLocation: "",
        specialRequirements: "",
        additionalMessage: "",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto rounded-xl shadow-lg border border-gray-100 bg-white p-8 md:p-12 mt-10 mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">{t('form_title')}</h2>

      {errorMsg && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 text-red-700">
          <p className="font-bold">{t('error_title')}</p>
          <p>{errorMsg}</p>
        </div>
      )}

      {successMsg && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 text-green-700">
          <p className="font-bold">{t('success_title')}</p>
          <p>{successMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('full_name_label')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder={t('full_name_placeholder')}
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('email_label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={t('email_placeholder')}
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('phone_label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder={t('phone_placeholder')}
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('start_date_label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('duration_label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="duration"
              min="1"
              placeholder="1"
              required
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('travelers_label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="travelers"
              min="1"
              placeholder="1"
              required
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('interests_label')}
          </label>
          <select
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-white"
          >
            <option value="">{t('select_interests')}</option>
            <option value="Cultural">{t('interest_cultural')}</option>
            <option value="Adventure">{t('interest_adventure')}</option>
            <option value="Wildlife">{t('interest_wildlife')}</option>
            <option value="Relaxation">{t('interest_relaxation')}</option>
            <option value="Historical">{t('interest_historical')}</option>
            <option value="Mixed">{t('interest_mixed')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('budget_label')}
          </label>
          <input
            type="text"
            name="budget"
            placeholder={t('budget_placeholder')}
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('pickup_label')}
          </label>
          <input
            type="text"
            name="pickupLocation"
            placeholder={t('pickup_placeholder')}
            value={formData.pickupLocation}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('requirements_label')}
          </label>
          <textarea
            name="specialRequirements"
            rows={3}
            placeholder={t('requirements_placeholder')}
            value={formData.specialRequirements}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-y"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('message_label')}
          </label>
          <textarea
            name="additionalMessage"
            rows={4}
            placeholder={t('message_placeholder')}
            value={formData.additionalMessage}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-600 focus:outline-none resize-y"
          ></textarea>
        </div>

        <div className="pt-6 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0f4422] hover:bg-[#0b3319] text-white font-semibold py-4 px-10 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? t('submitting') : t('submit_button')}
          </button>
        </div>
      </form>
    </div>
  );
}
