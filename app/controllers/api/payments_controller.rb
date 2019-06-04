class Api::PaymentsController < ApplicationController

    def index
        @payments = Payment.all
        render :index
    end

    # def show
    #     @payment = Payment.find(params[:id])
    #     render :show
    # end

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
        @payment = Payment.find(params[:id])
        @payment.destroy
        render json: {}
    end

    private

    def payment_params
        params.require(:payment).permit(:user_id, :bill_id, :initial_amount, :paid_amount)
    end

end