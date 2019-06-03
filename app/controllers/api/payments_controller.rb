class Api::PaymentsController < ApplicationController

    def index
        @payments = Payment.all
        render json: @payments
    end

    def create
        @payment = Payment.create(payment_params)
        if @payment.save
            render :show
        else
            render json: ["Unable to create payment"], status: 422
        end
    end

    def update
        @payment = current_user.payments.find(params[:id])
        if @payment.update(payment_params)
            render :show
        else
            render json: ["Unable to edit payment"], status: 422
        end
    end

    def destroy
        @payment = current_user.payments.find(params[:id])
        @payment.destroy
    end

    private

    def payment_params
        params.require(:payment).permit(:user_id, :bill_id, :initial_amount, :paid_amount)
    end

end