# -*- encoding : utf-8 -*-
module SiteLog

  # SiteLog::Base.logger('dir_name', 'testing message')
  class Base < Logger
    def format_message(serverity, timestamp, progname, msg)
      "[#{timestamp.to_formatted_s(:db)}] #{msg}"
    end

    def self.get_file(dir)
      # file_name = Time.now.strftime('%Y%m%d-%H')
      file_name = Time.now.strftime('%Y%m%d')
      log_dir =  Rails.root.to_s + "/public/logs/#{dir}/"
      unless Dir.exists? log_dir
        FileUtils.mkdir_p log_dir
        Rails.logger.info "****************** mkdir #{log_dir} ********************"
      end
      file = log_dir + "#{file_name}.txt"
      File.open(file, 'a')
    end

    def self.logger(dir, msg)
      logfile = self.get_file(dir)
      log = self.new(logfile)
      log.info "#{msg}\n\n"
      logfile.flush
      logfile.close
    end
  end

  class Alipay < Logger
    def format_message(serverity, timestamp, progname, msg)
      "[#{timestamp.to_formatted_s(:db)}] #{msg}"
    end

    def self.get_file
      # file_name = Time.now.strftime('%Y%m%d-%H')
      file_name = Time.now.strftime('%Y%m%d')
      log_dir =  Rails.root.to_s + "/public/logs/alipay/"
      FileUtils.mkdir_p log_dir unless Dir.exists? log_dir
      file = log_dir + "#{file_name}.txt"
      File.open(file, 'a')
    end

    def self.add(msg)
      logfile = self.get_file
      log = self.new(logfile)
      log.info "#{msg}\n\n"
      logfile.flush
      logfile.close
    end
  end

  class Weixinpay < Logger
    def format_message(serverity, timestamp, progname, msg)
      "[#{timestamp.to_formatted_s(:db)}] #{msg}"
    end

    def self.get_file
      file_name = Time.now.strftime('%Y%m%d')
      log_dir =  Rails.root.to_s + "/public/logs/wxpay/"
      FileUtils.mkdir_p log_dir unless Dir.exists? log_dir
      file = log_dir + "#{file_name}.txt"
      File.open(file, 'a')
    end

    def self.add(msg)
      logfile = self.get_file
      log = self.new(logfile)
      log.info "#{msg}\n\n"
      logfile.flush
      logfile.close
    end
  end

  class Bind < Logger
    def format_message(serverity, timestamp, progname, msg)
      "[#{timestamp.to_formatted_s(:db)}] #{msg}"
    end

    def self.get_file
      file_name = Time.now.strftime('%Y%m')
      log_dir =  Rails.root.to_s + "/public/logs/bind/"
      FileUtils.mkdir_p log_dir unless Dir.exists? log_dir
      file = log_dir + "#{file_name}.txt"

      # file_name = "#{Time.now.strftime('%Y%m%d')}.txt"
      # file = Rails.root.to_s + "/public/logs/bind.txt"
      File.open(file, 'a')
    end

    def self.add(msg)
      logfile = self.get_file
      log = self.new(logfile)
      log.info "#{msg}\n\n"
      logfile.flush
      logfile.close
    end
  end

  class Payment < Logger
    def self.logger
      logger_path = "#{Rails.root}/public/logs/error/payment"
      unless Dir.exists? logger_path
        FileUtils.mkdir_p logger_path
      end
      file_name = Time.now.strftime('%Y%m%d')
      ActiveSupport::BufferedLogger.new(Rails.root.join("#{logger_path}/#{file_name}.txt"))
    end
  end

end
