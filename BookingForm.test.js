import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("BookingForm", () => {
  test("renders all form fields", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  test("shows validation errors when form is submitted empty", async () => {
    render(<BookingForm />);
    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
      expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    });
  });

  test("shows invalid email error for bad email format", async () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
    });
  });

  test("shows invalid phone error for bad phone format", async () => {
    render(<BookingForm />);
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "abc" },
    });
    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid phone number/i)
      ).toBeInTheDocument();
    });
  });

  test("clears error when user starts typing in a field", async () => {
    render(<BookingForm />);
    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });

    await waitFor(() => {
      expect(
        screen.queryByText(/first name is required/i)
      ).not.toBeInTheDocument();
    });
  });

  test("calls onSubmit with form data when form is valid", async () => {
    const mockSubmit = jest.fn();
    render(<BookingForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          date: "2025-12-25",
          time: "18:00",
          guests: "2",
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "1234567890",
        })
      );
    });
  });

  test("shows confirmation message after successful submission", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "3" },
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "9876543210" },
    });

    fireEvent.click(screen.getByText(/confirm reservation/i));

    await waitFor(() => {
      expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
      expect(screen.getByText(/john/i)).toBeInTheDocument();
    });
  });
});
